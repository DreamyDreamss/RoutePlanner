const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const supabase = require('../../utils/supabaseClient');

async function login(email, password) {
  console.log(email,password);
  // 사용자가 존재하는지 확인
  const { data, error } = await supabase
    .from('MBR_BASE')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    throw new Error('Invalid email or password');
  }

  const user = data;
  console.log(user);
  // 비밀번호가 일치하는지 확인
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalid email or password');
  }

  // JWT 생성
  const token = jwt.sign(
    { id: user.user_sn, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  // 마지막 로그인 시간 업데이트
  await supabase
    .from('MBR_BASE')
    .update({ last_login: new Date().toISOString() })
    .eq('user_sn', user.user_sn);

  return token;
}

async function register(nickname, email, password) {
  // 비밀번호 해시화
  const hashedPassword = await bcrypt.hash(password, 10);

  // 사용자 등록
  const { data, error } = await supabase
    .from('MBR_BASE')
    .insert([{ nickname, email, password: hashedPassword, sys_reg_dtime: new Date().toISOString(), sys_mod_dtime: new Date().toISOString() }])
    .single();

  if (error) {
    throw new Error('Error creating user');
  }

  return data;
}

module.exports = {
  login,
  register,
};