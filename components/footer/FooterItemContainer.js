import FooterItems from './FooterItems'
import { COMPANY, SERVICE, LOCATION, RESOURCES } from './FooterMenus'


const FooterItemContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
    <FooterItems Links={COMPANY} title="COMPANY"/>
    <FooterItems Links={SERVICE} title="SERVICE"/>
    <FooterItems Links={LOCATION} title="LOCATION"/>
    <FooterItems Links={RESOURCES} title="RESOURCES"/>
    </div>
  )
}

export default FooterItemContainer
