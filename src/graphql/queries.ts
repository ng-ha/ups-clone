import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;
export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      value {
        Address
        City
        Lat
        Lng
        createdAt
        carrier
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
