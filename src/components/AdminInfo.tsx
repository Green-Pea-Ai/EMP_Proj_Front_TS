import React from "react";
import Analytics from "../routes/Dashboards/Analytics";
import {PageTemplate} from './index'

const AdminInfo = () => <PageTemplate> <section className="admin_info">
    <h1> [ 관리자 정보 페이지 ] </h1>
    <Analytics/>
</section></PageTemplate>

export default AdminInfo