import React, { useEffect, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import LinksCard from '../../components/main/LinkCard'
import { makeRequest } from '../../services/requests'

const LinksShorted = () => {

    useEffect(() => {
        makeRequest({ url: '/links' })
        .then(response => console.log(response.data))
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
