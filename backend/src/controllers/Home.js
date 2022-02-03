class Home {
  index(req, res) {
    res.json({
      'Ocorreu tudo certo!': true,
    });
  }
}
export default new Home();
