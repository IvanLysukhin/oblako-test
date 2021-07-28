import UserCheck from "../user-check/user-check";
import '../../style/available-participants.sass';

function AvailableParticipants() {
    return (
        <div className="available-participants">
            <div className="available-participants__all">
                <input className="available-participants__radio" type="radio" id="all" value="all" name="user"/>
                <label className="available-participants__label" htmlFor="all">Все пользователи</label>
            </div>
            <ul className="available-participants__list">
                {new Array(10).fill('').map((_, id) => <UserCheck key={id} id={id}/> )}
            </ul>
        </div>
    );
}

export default AvailableParticipants;
