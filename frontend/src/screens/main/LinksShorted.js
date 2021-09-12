import React, { useEffect, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import LinksCard from '../../components/main/LinkCard'
import { makeRequest } from '../../services/requests'

const LinksShorted = () => {

    useEffect(() => {
        fetch('http://localhost:8080/links')
        .then(res => res.json())
        .then(res => console.log(res))
    }, []);

    return (
        <FlatList 

        />
    )
}

export default LinksShorted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})
