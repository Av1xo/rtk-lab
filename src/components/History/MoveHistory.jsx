import { useDispatch, useSelector } from 'react-redux';
import { undoMove, redoMove } from '../../rtk/gameSlice';
import './MoveHistory.css';

const MoveHistory = () => {
    const dispatch = useDispatch();
    const { currentMove, history } = useSelector((state) => state.game);

    const handleUndo = () => {
        dispatch(undoMove());
    };

    const handleRedo = () => {
        dispatch(redoMove());
    };

    return (
        <div className="move-history">
            <button onClick={handleUndo} disabled={currentMove === 0}>
                Undo
            </button>
            <button
                onClick={handleRedo}
                disabled={currentMove === history.length - 1}
            >
                Redo
            </button>
        </div>
    );
};

export default MoveHistory;
