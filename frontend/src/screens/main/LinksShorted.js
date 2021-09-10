import React, { useEffect, useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import LinksCard from '../../components/main/LinkCard'

const LinksShorted = () => {

    // const fetchApi = useCallback( async () => {
    //     fetch('http://localhost:19002/');
    //     const resData = await response.json();
        
    //     console.log(resData);
    // }, [])

    

    useEffect(() => {
        fetch('http://localhost:19002/')
            .then(reponse => reponse.json())
            .then(response => console.log(response))
    }, [])

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
