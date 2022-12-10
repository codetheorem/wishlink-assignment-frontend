import './tag.css';

export default function Tag({ label,isActive,onClick }) {
   return(
    <div onClick={onClick} className={'tag_wrapper' + (isActive ? ' tag-active' : '')}>
        {label}
    </div>
   )
}