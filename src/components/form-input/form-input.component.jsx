import './form-input.styles.scss';

const FormInput = () => {
    return (
        <div className='group'>

        </div>
    );
};

export default FormInput;


























































// Solution -
// const FormInput = ({ label, ...otherProps }) => {
//     return (
//         <div className='group'>
//             <input className='form-input' {...otherProps} />
//             {label && (
//                 <label
//                     className={`${otherProps.value.length ? 'shrink' : ''
//                         } form-input-label`}
//                 >
//                     {label}
//                 </label>
//             )}
//         </div>
//     );
// };