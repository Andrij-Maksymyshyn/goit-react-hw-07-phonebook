import { useEffect } from 'react';
import { fetchContacts } from 'redux/PhonebookSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'redux/selectors';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';


function App() {
  const contacts = useSelector(getItems);
  const {isLoading, error} = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  


 return (
    <Container>
      <h1>Phonebook</h1>
     <ContactForm />
     
     {isLoading && <h2>Loading...</h2>}
     {error && <h2>An error occurred: {error.message}</h2>}

      {contacts.length > 0 && (
       <>
         <h2>Contacts</h2>
          <Filter />
          <ContactList />
         </>
     )}
     
    </Container>
  )
};

export default App;
