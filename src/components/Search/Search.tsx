import { Box, Input, Select } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { FC, useCallback, useEffect, useRef, useState } from 'react';


const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchKey, setSearchKey] = useState('title');
    const timeout = useRef<NodeJS.Timeout | null>(null);

    const handleChangeSearchValue: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setSearchValue(e.target.value);
    }, []);

    const handleChangeSearchType: React.ChangeEventHandler<HTMLSelectElement> = useCallback((e) => {
        setSearchKey(e.target.value);
    }, []);

    const setSearchParams = useCallback(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchValue.length === 0) {
            searchParams.delete('searchValue');
            searchParams.delete('searchKey');
            navigate(`${location.pathname}?${searchParams}`.replace(/\?$/i, ''), { replace: true });
            return;
        }
        searchParams.set('searchValue', searchValue);
        searchParams.set('searchKey', searchKey);
        console.debug('searchParams: \n', searchParams.toString());
        navigate(`?${searchParams}`, { replace: true });
    }, [searchValue, searchKey]);


    useEffect(() => {
        if (timeout.current)
            clearTimeout(timeout.current);
        timeout.current = setTimeout(setSearchParams, 700);
    }, [searchValue, searchKey]);

    return (
        <Box display="flex" mb={10}>
            <Input
                bg="white" flexGrow={3} value={searchValue}
                onChange={handleChangeSearchValue}
            />
            <Select
                bg="white" flexBasis={200} flexGrow={1}
                value={searchKey} onChange={handleChangeSearchType}
            >
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="tags">Tags</option>
            </Select>
        </Box>
    );
};

export default Search;
