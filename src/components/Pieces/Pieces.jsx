import './Pieces.css';
import Piece from "./Piece";
import { useRef } from 'react';
import { copyPosition, isValidPlayer } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { newMove } from '../../rtk/gameSlice';

const Pieces = () => {

    const ref = useRef()

    const dispatch = useDispatch();
    const { position, turn } = useSelector((state) => state.game);

    const calculateDropPosition = e => {
        const {width, left, top} = ref.current.getBoundingClientRect()
        const size = width / 8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7 - Math.floor((e.clientY - top) / size)
        return {x, y}
    }

    const handleDrop = e => {
        const newPosition = copyPosition(position)
        const {x, y} = calculateDropPosition(e)

        const [p, startRank, startFile] = e.dataTransfer.getData('text').split(',')

        if (!isValidPlayer(p, turn)) {
            return e.preventDefault();
        }


        newPosition[startRank][startFile] = ''
        newPosition[x][y] = p

        dispatch(newMove({ newPosition }));
    }

    const handleDragOver = e => e.preventDefault();

    return <div 
        ref = {ref}
        className='pieces'
        onDrop = {handleDrop}
        onDragOver={handleDragOver}
    >
        {position.map((r, rank) => 
            r.map((f, file) =>
                position[rank][file]
                ?   <Piece 
                        key={rank+'-'+file}
                        rank={rank}
                        file={file}
                        piece={position[rank][file]}
                    />
                :   null
        ))}
    </div>
}

export default Pieces;