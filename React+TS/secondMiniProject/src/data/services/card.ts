import api from "./config"

export const GetCards = async () => {
  try {
    /* const token = localStorage.getItem("token") */
    const cards = await api.get("/api/card", {
      headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDBmYTQ3ODY2NTYzYmVhM2UxZDZjNiIsIm5hbWUiOiJNYXJjbyBEdWFydGUiLCJlbWFpbCI6Im1hcmNvQGR1YXJ0ZS5jb20iLCJpYXQiOjE2OTQ1NjI5MzAsImV4cCI6MTY5NDY0OTMzMH0.k68bP92KQGxtQEqrRBSWfCejs8q0xL6YrI_JvuR6xPw" },
    })
    return cards.data
  } catch (error) {
    console.log(error)
  }
}

// colunas possiveis: TODO, DOING E DONE
// ESCRITOS DESSA FORMA E COM LETRAS MAIUSCULAS!!!
