export const loadConfiguration = async () => {
    try {
        const modulesResponse = await fetch('/api/widgets');
        window.widgets = await modulesResponse.json();
    } catch (e) {
        console.error('Error retrieving modules configuration', e);
    }
}
