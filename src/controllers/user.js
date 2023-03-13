import util from 'util';


export const getUsers = async (req, res) => {
  const query = util.promisify(mysqli.query).bind(mysqli)
  /* const sql = `SELECT * FROM formboxes.user;`; */
  const sql = `SELECT * FROM formboxes.user A LEFT JOIN formboxes.cars B ON A.id = B.userid`
  const result = await query(sql, [])
  return result
}

export const createUser = async (name, lastname, phone, address, model, brand, domain, description, color, mileage, paystate) => {
  const query = util.promisify(mysqli.query).bind(mysqli)
  const sql = `INSERT INTO user (name, lastname, phone, address) VALUES (?, ?, ?, ?);`;
  const result = await query(sql, [name, lastname, phone, address])
  const sqlVehicle = `INSERT INTO cars (model, brand, domain, description, color, mileage, userid) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const resultCars = await query(sqlVehicle, [model, brand, domain, description, color, mileage, result.insertId])
  return result, resultCars
}

export const deleteUser = async() => {
  const query = util.promisify(mysqli.query).bind(mysqli)
  const sql = ``
  const result = await query(sql, [])
  return result
}

export const updateUser = async () => {
  const query = util.promisify(mysqli.query).bind(mysqli)
  const sql = ``;
  const result = await query(sql, [])
  return result
}
