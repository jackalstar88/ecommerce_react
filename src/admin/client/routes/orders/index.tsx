import OrdersList from "modules/orders/list"
import OrdersFilter from "modules/orders/listFilter"
import Statuses from "modules/orderStatuses/list"
import React from "react"

export default () => (
  <div className="row row--no-gutter col-full-height">
    <div className="col-xs-12 col-sm-4 col-md-3 col--no-gutter scroll col-full-height">
      <Statuses showAll showManage />
      <OrdersFilter />
    </div>
    <div className="col-xs-12 col-sm-8 col-md-9 col--no-gutter scroll col-full-height">
      <OrdersList />
    </div>
  </div>
)
