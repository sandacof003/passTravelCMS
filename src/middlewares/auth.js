const jwt = require('jsonwebtoken');
const { prisma } = require('../config/prisma');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 'error', message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ status: 'error', message: 'Invalid token' });
  }
};

const verifyAdmin = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    });

    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ 
        status: 'error', 
        message: 'Access denied. Admin privileges required.' 
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ 
      status: 'error', 
      message: 'Error verifying admin privileges' 
    });
  }
};

module.exports = {
  verifyToken,
  verifyAdmin
};
