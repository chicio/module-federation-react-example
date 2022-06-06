export const loadConfiguration = async () => {
    try {
        const widgetsResponse = await fetch('/api/widgets');
        window.widgets = await widgetsResponse.json();
    } catch (e) {
        console.error('Error retrieving modules configuration', e);
    }
}
