import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { bindActionCreators } from "redux";

import { setCharacterResults } from "../store/actions/characterAction";

import axios from 'axios'
import {RM_API} from "../utils/utils";

import {Flex} from "../components/grids/Flex";
import CharacterCard from "../components/CharacterCard";
import TextField from "@material-ui/core/TextField";
import {Spinner} from '../components/Spinner'

const FrontPage = () => {
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCharacterResults())
    }, [])

    const characters = useSelector(state => state.CharactersReducer.characterResults);

    const handleFiltering = (input) => {
        let filterCharacters = characters.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setFilteredCharacters(filterCharacters)
        setIsFiltered(true)
    }

    const Loader = () => {
        return (
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{height: '100%', width: '100%'}}
            >
                <h2>Loading Characters</h2>
                <Spinner />
            </Flex>
        )
    }

    return(
        <>
            <h1>Front Page</h1>
            <Flex
                flexDirection={'column'}
                flexWrap={'wrap'}
                justifyContent={'space-around'}
                style={{height: '100%', width: '100%'}}
            >
                <form style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'row', margin: '0 auto'}}>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        name={'query'}
                        type={'text'}
                        onChange={handleFiltering}
                        variant="outlined"
                        style={{ margin: '0.5rem', width: '90%' }}
                    />
                </form>
                {
                    (isFiltered) ?

                        <Flex justifyContent={'space-around'} flexWrap={'wrap'} flexDirection={'row'}>
                            { characters !== undefined > 0 ?  filteredCharacters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    id={character.id}
                                    name={character.name}
                                    image={character.image}
                                    species={character.species}
                                    status={character.status}
                                    location={character.location}/>
                            )) : <Loader />  }
                        </Flex>
                        :
                        <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-around'}>
                            {characters !== undefined > 0 ? characters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    id={character.id}
                                    name={character.name}
                                    image={character.image}
                                    species={character.species}
                                    status={character.status}
                                    location={character.location}/>
                            )) : <h1>no characters here</h1>}
                        </Flex>
                }
            </Flex>
        </>


    )
}

export default FrontPage
