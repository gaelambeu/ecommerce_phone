export const formatPrice = 
(amount: number) => {
    return new Intl.NumberFormat
    ('en-US', {
        style: 'currency',
        currency:'US0'
    }).format(amount)
}