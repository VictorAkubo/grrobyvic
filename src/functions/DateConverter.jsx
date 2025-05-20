const formatDate = (rawDate) => {
    const date = new Date(rawDate);

    // Format day with suffix (1st, 2nd, 3rd, etc.)
    const getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) return `${day}th`;
        const lastDigit = day % 10;
        if (lastDigit === 1) return `${day}st`;
        if (lastDigit === 2) return `${day}nd`;
        if (lastDigit === 3) return `${day}rd`;
        return `${day}th`;
    };

    const dayWithSuffix = getDaySuffix(date.getDate());
    const month = date.toLocaleString("en-US", { month: "short" }); // e.g., Aug
    const year = date.getFullYear();

    const time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return `${month} ${dayWithSuffix}, ${year} ${time}`;
};
export default formatDate;