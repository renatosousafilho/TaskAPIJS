module.exports = (name, user) => {
  if (!name) return { code: 422, message: "Nome deve ser preenchido" }
  if (name.length < 3) return { code: 422, message: "Nome deve ter pelo menos 3 caracteres" }
  if (!user) return { code: 422, message: "Usuário deve ser preenchido" }
  if (user.length < 3) return { code: 422, message: "Usuário deve ter pelo menos 3 caracteres" }

  return {};
}


