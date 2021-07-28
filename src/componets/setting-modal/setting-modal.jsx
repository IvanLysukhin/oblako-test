function SettingModal() {
    return (
        <div className="participants-form__setting-modal">
            <h4 className="participants-form__setting-title">Системные поля</h4>
            <ul  className="participants-form__setting-list">
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="search-filt" defaultChecked/>
                    <label className="participants-form__setting-label" htmlFor="search-filt">Поиск</label>
                </li>
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="group-filt" defaultChecked/>
                    <label className="participants-form__setting-label" htmlFor="group-filt">Группа</label>
                </li>
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="spec-filt" defaultChecked/>
                    <label className="participants-form__setting-label" htmlFor="spec-filt">Должность</label>
                </li>
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="exp-filt" defaultChecked/>
                    <label className="participants-form__setting-label" htmlFor="exp-filt">Стаж</label>
                </li>
            </ul >
            <h4 className="participants-form__setting-title">Дополнительные поля</h4>
            <ul className="participants-form__setting-list">
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="sector-filt"/>
                    <label className="participants-form__setting-label" htmlFor="sector-filt">Подразделение</label>
                </li>
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="area-filt"/>
                    <label className="participants-form__setting-label" htmlFor="area-filt">Округ</label>
                </li>
                <li className="participants-form__setting-item">
                    <input className="participants-form__setting-input" type="checkbox" name="filt-setting" id="city-filt"/>
                    <label className="participants-form__setting-label" htmlFor="city-filt">Город</label>
                </li>
            </ul>
        </div>
    );
}

export default SettingModal;
