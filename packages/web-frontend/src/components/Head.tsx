/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import styled from 'styled-components';

// Miscellaneous Imports
import { Helmet } from 'react-helmet';
import SiteInfo from 'constants/SiteInfo.json';

// Type Declarations
interface IHeadProps {
  title: string;
}

/**
 * Component that manages changes to document head
 * currently we are only editing the title but more can be added
 */
const Head = ({ title }: IHeadProps) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default Head;
