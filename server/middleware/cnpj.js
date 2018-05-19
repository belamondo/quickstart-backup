module.exports = function() {
    return function cnpj(req, res, next) {
        let cnpj = res.originalUrl.split('/')
        if(cnpj[1]) {
            res.json({cnpj: cnpj[1]});
        } else {
            res.json({cnpj: cnpj[0]});
        }
    };
};