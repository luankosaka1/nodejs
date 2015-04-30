module.exports = function(app) {
	var ContatoController = {
		index: function(req, res) {
			var usuario = req.session.usuario,
				contatos = usuario.contatos,
				params = {usuario: usuario, contatos: contatos};

			res.render('contato/index', params);
		},
		create: function(req, res) {
			var contato = req.body.contato,
				usuario = req.session.usuario;
			usuario.contatos.push(contato);

			res.redirect('/contato');
		},
		show: function(req, res) {
			var id = req.params.id,
				contato = req.session.usuario.contatos[id],
				params = {contato: contato, id: id};

			res.render('contato/show', params);
		},
		edit: function(req, res) {
			var id = req.params.id, 
				usuario = req.session.usuario,
				contato = usuario.contatos[id],
				params = {usuario: usuario, contato: contato, id: id};

			res.render('contato/edit', params);
		},
		update: function(req, res) {
			var contato = req.body.contato, 
				usuario = req.session.usuario;

			usuario.contatos[req.params.id] = contato;

			res.redirect('/contato');
		},
		destroy: function(req, res) {
			var usuario = req.session.usuario,
				id = req.params.id;

			usuario.contatos.splice(id, 1);

			res.redirect('/contato');
		}
	};

	return ContatoController;
}