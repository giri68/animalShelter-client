import {API_BASE_URL} from './config'

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/api/cat`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  .then((cat) => dispatch(fetchCatSuccess(cat)))
  .catch(error => dispatch (fetchCatError(error)))
}

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = () => ({
  type: FETCH_CAT_ERROR
})

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`http://localhost:8080/api/dog`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  .then((dog) => dispatch(fetchDogSuccess(dog)))
  .catch(error => dispatch (fetchDogError(error)))
}

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = () => ({
  type: FETCH_DOG_ERROR
})

export const adoptPet = (species) => dispatch => {
  dispatch(adoptPetRequest());
  fetch(`http://localhost:8080/api/${species}`, {
    method: 'delete'
})
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  .then((res) => {
    if (res.species === 'cat') {
    dispatch(fetchCat())
    }
    else 
    dispatch(fetchDog())
    })
  .catch(error => dispatch (adoptPetError(error)))
}

export const ADOPT_PET_REQUEST = 'ADOPT_PET_REQUEST'
export const adoptPetRequest = () => ({
  type: ADOPT_PET_REQUEST
})

export const ADOPT_PET_SUCCESS = 'ADOPT_PET_SUCCESS'
export const adoptPetSuccess = () => ({
  type: ADOPT_PET_SUCCESS
})

export const ADOPT_PET_ERROR = 'ADOPT_PET_ERROR'
export const adoptPetError = () => ({
  type: ADOPT_PET_ERROR
})