To make an API call there is two approach they are

![image.png](attachment:fc0d6101-15ca-40b8-9be0-f3a2e86a4509:image.png)

When the component initially loads in the browser, an API call is made, and once the response is received, the data is rendered on the screen.

![image.png](attachment:bca04838-8139-4113-b9ed-bdf9e1e333e7:image.png)

When the component initially loads, it first renders. After that, an API call is made, and once the response is received, the component re-renders to display the data on the screen.

We usually follow this **second approach** because it provides a better user experience (UX).

Initially, we display a skeleton or loading screen, and once the API call is completed, the component re-renders with the actual data to display the final content.