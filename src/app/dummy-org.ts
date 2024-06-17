export interface OrganizationHierarchy {
    organizationId: string;
    name: string;
    childOrganizations: OrganizationHierarchy[];
  }



export const DUMMY_ORGANIZATIONS: OrganizationHierarchy[] = [
    {
      organizationId: "1",
      name: "Zentry",
      childOrganizations: [
        {
          organizationId: "2",
          name: "Geekmosis",
          childOrganizations: [
            {
              organizationId: "3",
              name: "Zounds",
              childOrganizations: [
                {
                  organizationId: "4",
                  name: "Moreganic",
                  childOrganizations: []
                }
              ]
            }
          ]
        },
        {
          organizationId: "5",
          name: "Envire",
          childOrganizations: [
            {
              organizationId: "6",
              name: "Zoxy",
              childOrganizations: [
                {
                  organizationId: "7",
                  name: "Dognosis",
                  childOrganizations: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      organizationId: "8",
      name: "Opticon",
      childOrganizations: [
        {
          organizationId: "9",
          name: "Amtap",
          childOrganizations: []
        }
      ]
    },
    {
      organizationId: "10",
      name: "Glasstep",
      childOrganizations: []
    }
  ];

