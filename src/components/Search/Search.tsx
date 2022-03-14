import { Box, Input, Select } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { FC, useCallback, useEffect, useRef, useState } from 'react';


const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('title');
    const timeout = useRef<NodeJS.Timeout | null>(null);

    const handleChangeSearchValue: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setSearchValue(e.target.value);
    }, []);

    const handleChangeSearchType: React.ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
        setSearchType(e.target.value);
    }, []);

    const setSearchParams = useCallback(() => {
        const searchParams = new URLSearchParams();
        if (searchValue.length === 0) {
            navigate(location.pathname, { replace: true });
            return;
        }
        searchParams.set(searchType, searchValue);
        navigate(`?${searchParams}`, { replace: true });
    }, [searchValue, searchType]);


    useEffect(() => {
        if (timeout.current)
            clearTimeout(timeout.current);
        timeout.current = setTimeout(setSearchParams, 700);
    }, [searchValue, searchType]);

    return (
        <Box display="flex" mb={10}>
            <Input
                bg="white" flexGrow={3} value={searchValue}
                onChange={handleChangeSearchValue}
            />
            <Select
                bg="white" flexBasis={200} flexGrow={1}
                value={searchType} onChange={handleChangeSearchType}
            >
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="tags">Tags</option>
            </Select>
        </Box>
    );
};

export default Search;
