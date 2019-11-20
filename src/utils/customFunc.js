export const apiDataFetch = (URL, token, searchFor) => {
   return fetch(`${URL}/v1/getdevice?token=${token}&device=${searchFor}`)
      .then(res => res.json())
}

export const apiImagesFetch = (URL, query, client_id) => {
   return fetch(`${URL}?query=${query}&client_id=${client_id}`)
      .then(res => res.json())
}
