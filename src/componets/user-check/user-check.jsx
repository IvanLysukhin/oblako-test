function UserCheck({id}) {
    return (
        <li className="available-participants__item">
            <input className="available-participants__radio" type="radio" id={`user-${id}`} value="Максим Вильниц" name="user"/>
            <label className="available-participants__label available-participants__label--user" htmlFor={`user-${id}`}>Максим Вильниц</label>
        </li>
    );
}

export default UserCheck;
