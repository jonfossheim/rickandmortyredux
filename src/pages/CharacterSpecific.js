import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Flex } from "../components/grids/Flex";
import { Spinner } from "../components/Spinner";
import spacetime from "spacetime";
import { useDispatch, useSelector } from "react-redux";
import { setSpecificCharacterResult } from "../store/actions/characterAction";

const CharacterSpecific = () => {
    const { id } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSpecificCharacterResult(id))
    }, [dispatch, id])

    const character = useSelector(state => state.CharactersReducer.specificCharacterResult);

    const Loader = () => {
        return (
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{ height: '100%', width: '100%' }}
            >
                <h2>Loading Character</h2>
                <Spinner />
            </Flex>
        )
    }

    const s = spacetime(character.created)
    const formattedDate = s.format('{year}-{date-pad}-{month-pad} {time}')
    return (
        <>
            {!character.hasOwnProperty('name') ?
                <Loader /> :
                <div>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} />
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                    <p>Created: {formattedDate}</p>
                    <p>Appears in {character.episode.length} episode(s)</p>
                </div>}
        </>
    )
}

export default CharacterSpecific
