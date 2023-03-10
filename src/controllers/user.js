import util from 'util';


export const getUsers = async (req, res) => {
  const query = util.promisify(mysqli.query).bind(mysqli)
  const sql = `SELECT * FROM formboxes.user;`;
  const result = await query(sql, [])
  console.log(result)
  return result
}

export const createUser = async (name, lastname, phone, address) => {
  console.log(res)
  const query = util.promisify(mysqli.query).bind(mysqli)
  const sql = `INSERT INTO formboxes.user (name, lastname, phone, address) VALUES (?, ?, ?, ?);`
  const result = await query(sql, [name, phone])
  console.log(result)
  return result
}

export const deleteUser = (req, res) => {
  res.send('delete user');
}

export const updateUser = (req, res) => {
  res.send('update user');
}
