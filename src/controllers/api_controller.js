const fs = require('fs');
const path = require('path')


const api = {
    skill: (req, res) => {
        try {
            const storageJson = path.resolve(__dirname, '../database/skill.json');
            const dataJson = fs.readFileSync(storageJson, 'utf8');

            res.status(200).json(dataJson);
        } catch (error) {
            res.status(401).json(error);
        }
    }
};

module.exports = api;