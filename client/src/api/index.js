import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:1328/api',
})

export const createTask = payload => api.post('/task', payload)
export const getAllTasks = () => api.get('/task')
export const updateTaskById = (id, payload) => api.put('/task/${id}', payload)
export const deleteTaskById = id => api.delete('/task/${id}')
export const getTaskById = id => api.get('/task/${id}')

const apis = {
	createTask,
	getAllTasks,
	updateTasksById,
	deleteTasksById,
	getTaskById,
}

export default apis
