import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import UsersList from './components/UsersList';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function App() {
 
  const [articles, setArticles] = useState([])
  const [users, setUsers] = useState([])
  const [editArticle, setEditArticle] = useState(null)
    let history = useHistory()


    

  useEffect(() => {
    if(!localStorage.getItem('token')) {
        history.push('/')
    }
    else {
      axios.get('http://localhost:8000/api/users/')
    .then(resp => resp.json())
    .then(resp => setUsers(resp))
    .catch(error => console.log(error))
    }
}, [])

  // const editBtn = (article) => {
  //   setEditArticle(article)

  // }

  // const updatedInformation = (article) => {
  //   const new_article = articles.map(myarticle => {
  //     if(myarticle.id === article.id) {
  //       return article;
  //     }
  //     else {
  //       return myarticle;
  //     }
  //   })

  //   setArticles(new_article)

  // }

  // const articleForm = () => {
  //   setEditArticle({title:'', description:''})

  // }

  // const insertedInformation = (article) => {
  //   const new_articles = [...articles, article]
  //   setArticles(new_articles)

  // }

  // const deleteBtn = (article) => {
  //   const new_articles = articles.filter(myarticle => {
  //     if(myarticle.id === article.id) {
  //       return false
  //     }
  //     return true;
  //   })

  //   setArticles(new_articles)

  // }

  const logoutBtn = () => {
    localStorage.removeItem('token');
    history.push('/')
  }

  return (
    <div className="App">
      <div className = "row">
      <div className = "col">
        <h2>Django And ReactJS</h2>
        <br/>
        </div>
        {/* <div className = "col">
        <button onClick = {articleForm} className = "btn btn-primary">Insert Article</button>
        </div>
 */}

        <div className = "col">
        <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
        </div>
      </div>
        <UsersList users={users}/>    
        {/* <ArticleList articles = {articles} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
        {editArticle ? <Form article = {editArticle} updatedInformation = {updatedInformation} insertedInformation = {insertedInformation}/> : null}
 */}  
    </div>
  );
}

export default App;
