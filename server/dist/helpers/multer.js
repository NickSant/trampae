'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//lib nativa
//passando as nossas configurações em um objeto
exports.default = (0, _multer2.default)({
    //armazenamento
    storage: _multer2.default.diskStorage({
        destination: function destination(req, file, callback) {
            callback(null, 'uploads/'); //retorna o destino como sendo a pasta de uploads/
        },
        filename: function filename(req, file, callback) {
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            callback(null, file.originalname);
        }
    }), //fim da configuração de storage
    fileFilter: function fileFilter(req, file, callback) {
        try {
            //filtrando formatos aceitos
            if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
                console.log('passou pelo multer');
                return callback(null, true);
            }

            return callback(null, false); //significa que não aceita o arquivo
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    }

});
//# sourceMappingURL=multer.js.map