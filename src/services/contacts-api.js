import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
};

export async function fetchContactByIdRem(contactId) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
};

export async function fetchContactAdd(contact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
};