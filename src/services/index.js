/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cpflhackathon.herokuapp.com/api/v1/',
	// baseURL: "localhost:5000/api/v1/",
});

export default {
	index: {
		invoices() {
			return api
				.get('/invoices')
				.then((response) => response)
				.catch((error) => error);
		},
		cards() {
			return api
				.get('/cards')
				.then((response) => response)
				.catch((error) => error);
		},
		chatBotMessages() {
			return api
				.get('/chat_bot_messages')
				.then((response) => response)
				.catch((error) => error);
		},
		cpflRewards() {
			return api
				.get('/cpfl_rewards')
				.then((response) => response)
				.catch((error) => error);
		},
	},
	show: {
		invoices(id) {
			return api
				.get(`/invoices/${id}`)
				.then((response) => response)
				.catch((error) => error);
		},
		cards(id) {
			return api
				.get(`/cards/${id}`)
				.then((response) => response)
				.catch((error) => error);
		},
		chatBotMessages(id) {
			return api
				.get(`/chat_bot_messages/${id}`)
				.then((response) => response)
				.catch((error) => error);
		},
		cpflRewards(id) {
			return api
				.get(`/cpfl_rewards/${id}`)
				.then((response) => response)
				.catch((error) => error);
		},
	},
	post: {
		users(params) {
			return api
				.post('/users', params)
				.then((response) => response)
				.catch((error) => error);
		},
	},
};
