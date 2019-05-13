export function getCards() {
  return fetch('/cards').then(res => res.json())
}

export function postCard({ title, description, tags }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      description,
      tags
    })
  }
  return fetch('/cards', options).then(res => res.json())
}

export function patchCard(data, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(`/cards/${id}`, options).then(res => res.json())
}

export function saveToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getFromLocalStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (err) {
    console.log(err)
  }
}
