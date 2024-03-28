import Tag from "./Tag";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Card({show,logo, company, resent, fetured,position,role,location,level,posted,contract,tools,languages}) {
  return (
    <div className={`card ${resent ? 'new' : ''}`}>
        <div className="company-info">
            <div className="logo">
                <img src={logo} alt={company} />
            </div>
            <div className="info">
                <div className="util">
                    <strong className="name-company">{company}</strong>
                    {resent && <b className="indicator new">New!</b>}
                    {fetured && <b className="indicator featured">Featured</b>}
                </div>
                <h2 className="level">{position}</h2>
                <div className="date">
                    <span className="date-item posted">{posted}</span>
                    <span className="date-item contract">{contract}</span>
                    <span className="date-item location">{location}</span>
                </div>
            </div>
        </div>
        <div className="tools-company">
            {role && <Tag type={'role'} filter={show}>{role}</Tag>}
            {level && <Tag type={'level'} filter={show}>{level}</Tag>}
            {
                tools.map(tool => (
                    <Tag key={crypto.randomUUID()} type={`tools`} filter={show}>{tool}</Tag>
                ))
            }
            {
                languages.map(languaje => (
                    <Tag key={crypto.randomUUID()} type={'languages'} filter={show}>{languaje}</Tag>
                ))
            }
        </div>
    </div>
  )
}
