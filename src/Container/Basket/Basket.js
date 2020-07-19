import React, {useEffect, useState} from 'react';
import axios from "axios";
import useFetch from "../../Hooks/useFetch";
import useFetchLogin from "../../Hooks/useFetchLogin";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ErrorMessage from "../../common/ErrorMessage/Error-message";
import {Link} from "react-router-dom";


const Basket = (props) => {

    const initialValues = {
        title: '',
        body: '',
        description: '',
        tagList: [],

    };


    const slug = props.match.params.slug;


    const [{response}, doFetchLogin] = useFetchLogin('users/login');
    const [/*token*/, setToken] = useLocalStorage('token');
    useEffect(() => {
        if (!response) {
            return
        }
        setToken(response.user.token);
    }, [response, setToken,]);


    /*    useEffect(() => {
            if (!response) {
                return
            }
            doFetch()
        }, [response]);*/

    /*useEffect(() => {
        if (!hello) {
            return
        }
        axios('https://conduit.productionready.io/api/users/login', {
            method: 'post',
            data: {
                user: {
                    email: '1595159@mail.ru',
                    password: '1595159slava'
                }
            }
        }).then(response => {
            return response
        })
    },[hello]);*/


    const [title, setNumber] = useState('');
    const [body, setEmail] = useState('');
    const [description ,] = useState(slug);
    const [tagList, setTagList ] = useState([]);

/*    useEffect( () => {
        if (!initialValues) {
            return
        }
        setNumber(initialValues.title);
        setEmail(initialValues.body);
        setTagList(initialValues.description);
        setTagList(initialValues.tagList.join(' '));
    }, [initialValues]);*/



    const apiURL = `articles`;
    const [{responseAr, error}, doFetch] = useFetch(apiURL);

    const onSubmit = article => {
        doFetch({
            method: 'post',
            data: {
                article
            }
        })
    };


    const handleSubmit = e => {
        e.preventDefault();
        const article = {
            title,
            body,
            description,
            tagList,
        };
        onSubmit(article);
    };

    return <div>
        {((error && error.errors) || {} ) &&  <ErrorMessage backendErrors={((error && error.errors) || {} )} />}
        <form onSubmit={handleSubmit}>
            <div>
                Введите ваш телефон:
                <div>
                    <input type="text" placeholder={'Введите ваш телефон'} value={title}
                           onChange={e => setNumber(e.target.value)}/>
                </div>
            </div>
            <div>
                Введите вашу почту:
                <div>
                    <input type="email" placeholder={'Введите вашу почту'} value={body}
                           onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div>
                <button type={'submit'}>Опубликовать пост</button>
            </div>
        </form>
    </div>
};

export default Basket;