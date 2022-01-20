import React from 'react'

import { PageFilter } from './PageFilter'

export default {
  title: 'Example/PageFilter',
  component: PageFilter,
}

// Create a “template” of how args map to rendering
const Template = (args) => <PageFilter {...args} />

export const CloseSideNav = Template.bind({})
CloseSideNav.args = {
};

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
