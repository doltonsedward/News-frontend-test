import axios from 'axios'
import { baseUrl } from '../../application'

export const API = axios.create({
    baseUrl: baseUrl
})