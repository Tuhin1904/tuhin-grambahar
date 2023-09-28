import { gql } from '@apollo/client';

export const ALL_PRODUCTS_QUERY = gql`
  {
    products {
      id
      name
      description
      subtitle
      sellingPrice
      variant
      images {
        directus_files_id
      }
      review {
        id
        review
        rating
        user {
          first_name
        }
      }
    }
  }
`;

export const TEST111 = '';
