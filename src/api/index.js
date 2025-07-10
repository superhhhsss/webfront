import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    register(user) {
        return apiClient.post('/users/register', user);
    },
    login(user) {
        return apiClient.post('/users/login', user);
    },
    getActivities() {
        return apiClient.get('/activities');
    },
    getActivity(id) {
        return apiClient.get(`/activities/${id}`);
    },
    createActivity(activity) {
        return apiClient.post('/activities', activity);
    },
    joinActivity(activityId) {
        return apiClient.post(`/activities/${activityId}/join`);
    },
    getOrders() {
        return apiClient.get('/orders');
    },
    addComment(activityId, comment) {
        return apiClient.post(`/activities/${activityId}/comments`, comment);
    },
    searchActivities(keyword) {
        return apiClient.get(`/activities/search?q=${keyword}`);
    }
};