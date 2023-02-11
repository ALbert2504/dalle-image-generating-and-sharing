import * as dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token !== process.env.SECRET_PASSWORD) {
      throw new Error('Your membership password is worong.');
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message || 'Anuthorized.',
    });
  }
}

export default auth;