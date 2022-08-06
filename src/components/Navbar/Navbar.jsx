import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const categories = [
    { id: 1, name: "THEORY", path: "/theory"},
    { id: 2, name: "BASIC", path: "/basic"},
    { id: 3, name: "WORDS", path: "/words"},
    { id: 4, name: "MORE WORDS", path: "/more_words"},
    { id: 5, name: "WORDS-PHRASES", path: "/words_phrases"},
    { id: 6, name: "PHRASES-1", path: "/phrases_1"},
    { id: 7, name: "PHRASES-2", path: "/phrases_2"},
    { id: 8, name: "X", path: "/x"},
    { id: 9, name: "XXX", path: "/xxx"},
    { id: 10, name: "THEMATIC", path: "/thematic"},
    { id: 11, name: "IRREGULAR VERBS", path: "/irregular_verbs"},
    { id: 12, name: "PLAYIST", path: "/playlist"},
]

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {categories.map(item => <div className={styles.item}><NavLink to={item.path} activeClassName={styles.activeLink}>{item.name}</NavLink></div>)}
        </nav>
    )
}

export default Navbar
