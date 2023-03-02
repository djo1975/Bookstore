import { useState } from 'react';

const Form = () => {
const [state, setState] = useState({
booktitle: '',
auther: '',
});

const handleChange = (e) => {
setState({
...state,
[e.target.name]: e.target.value,
});
};

return (
<>
<h3 className={styles.Formtitle}>ADD NEW BOOK</h3>
<form>
<label htmlFor="booktitle">
<input placeholder="Book title" name="booktitle" className={styles.formInput} type="text" value={state.booktitle} onChange={handleChange} />
</label>
<label htmlFor="auther">
<input className={styles.formInput2} placeholder="Auther" name="auther" type="text" value={state.auther} onChange={handleChange} />
</label>
<button type="button" className={styles.addBtn}>Add book</button>
</form>
</>
);
};

export default Form;